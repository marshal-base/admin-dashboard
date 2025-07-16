/*
 * @author: marshal93
 * @Date: 2025-07-16 15:37:32
 * @LastEditors: marshal93@163.com
 * @LastEditTime: 2025-07-16 15:47:28
 */
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub]
});
