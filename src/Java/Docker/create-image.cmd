docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 123-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t 123-java/app ../../..
