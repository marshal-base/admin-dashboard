/*
 * @author: marshal93
 * @Date: 2025-07-16 14:40:44
 * @LastEditors: marshal93@163.com
 * @LastEditTime: 2025-07-16 14:40:44
 */
export default {
  images: {
    domains: ['avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        search: ''
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        search: ''
      }
    ]
  }
};
