FROM centos/nginx-112-centos7

ADD . /opt/app-root/src/
RUN chown default:root -R /opt/app-root/src && chmod -R 770 /opt/app-root/src/

CMD ["nginx", "-g", "daemon off;"]