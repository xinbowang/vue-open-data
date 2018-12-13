/**
 * 用于:引入单个页面组件 - 实现懒加载
 */
export const Layout = () => import('@/components/layout/index');
// pages
export const Index = () => import('@/components/pages/index');
