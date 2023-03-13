FROM mysql:5.7

RUN ln -snf /usr/share/zoneinfo/Europe/Moscow /etc/localtime \
    && echo "Europe/Moscow" > /etc/timezone

COPY my.cnf /etc/mysql/conf.d/my.cnf
