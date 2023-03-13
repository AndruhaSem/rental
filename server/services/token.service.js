const jwt = require("jsonwebtoken");
const config = require("config");
const db = require("../models/index");
const Token = require("../models/Token.old");

class TokenService {
  generate(payload) {
    const accessToken = jwt.sign(payload, config.get("accessSecret"), {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign(payload, config.get("refreshSecret"));
    return {
      accessToken,
      refreshToken,
      expiresIn: 3600,
    };
  }
  async save(userId, refreshToken) {
    const token = await db.Token.findOne({ where: {user_id: userId} });
    if (token) {
      token.refresh_token = refreshToken;
      return token.save();
    }
    return await db.Token.create({user_id: userId, refresh_token: refreshToken});
  }
  validateRefresh(refreshToken) {
    try {
      return jwt.verify(refreshToken, config.get("refreshSecret"));
    } catch (e) {
      return null;
    }
  }
  validateAccess(accessToken) {
    try {
      return jwt.verify(accessToken, config.get("accessSecret"));
    } catch (e) {
      return null;
    }
  }
  async findToken(refreshToken) {
    try {
      return await Token.findOne({ refreshToken });
    } catch (e) {
      return null;
    }
  }
}

module.exports = new TokenService();
