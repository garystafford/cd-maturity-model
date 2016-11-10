FROM httpd:2.4
COPY dist /usr/local/apache2/htdocs/dist
COPY index.html /usr/local/apache2/htdocs/
COPY favicon.ico /usr/local/apache2/htdocs/
