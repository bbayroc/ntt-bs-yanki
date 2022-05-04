FROM amazoncorretto:11-alpine-jdk
MAINTAINER bayro
COPY target/Yanki-0.0.1-SNAPSHOT.jar /Yanki.jar
ENTRYPOINT ["java","-jar","/Yanki.jar"]

