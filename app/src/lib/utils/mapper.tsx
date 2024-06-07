import Docker from "@/assets/icons/docker.svg";
import ReactIcon from "@/assets/icons/react.svg";
import Node from "@/assets/icons/node.svg";
import Postgres from "@/assets/icons/postgres.svg";
import Sentry from "@/assets/icons/sentry.svg";
import Redis from "@/assets/icons/redis.svg";
import TypeScript from "@/assets/icons/ts.svg";
import SQL from "@/assets/icons/sql.svg";
import Vue from "@/assets/icons/vue.svg";
import Mongo from "@/assets/icons/mongodb.svg";
import Prisma from "@/assets/icons/prisma.svg";
import Kafka from "@/assets/icons/kafka.svg";

export const IconTechMapper = (tech: string) => {
    switch (tech) {
      case "docker":
        return Docker;
      case 'vue':
        return Vue;
      case "react":
        return ReactIcon;
      case "node":
        return Node;
      case "postgres":
        return Postgres;
      case "sentry":
        return Sentry;
      case "redis":
        return Redis;
      case "ts":
        return TypeScript;
      case "sql":
        return SQL;
      case 'mongo':
        return Mongo;
      case 'prisma':
        return Prisma;
      case 'kafka':
        return Kafka;
      default:
        return Docker;
    }
  }