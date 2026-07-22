import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.43.248",
    "*.devtunnels.ms",
    "*.ngrok-free.app",
    "*.loca.lt",
  ],
};

export default nextConfig;
