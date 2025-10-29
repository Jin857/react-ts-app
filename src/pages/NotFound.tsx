// pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedNavigation } from '../hooks/useTypedNavigation';

const NotFound: React.FC = () => {
  const { navigateTo, currentPath } = useTypedNavigation();

  const quickActions = [
    {
      title: '返回首页',
      description: '回到应用主页',
      path: '/' as '/',
      icon: '🏠'
    },
    {
      title: '浏览产品',
      description: '查看我们的产品',
      path: '/product/1' as '/product/:id',
      icon: '📦'
    },
    {
      title: '联系我们',
      description: '获取帮助和支持',
      path: '/contact' as '/contact',
      icon: '📞'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-gray-800 mb-4 relative">
            <span className="relative">
              4
              <span className="absolute -top-4 -right-6 text-6xl">0</span>
              4
            </span>
          </div>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
        </div>

        {/* Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          页面未找到
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          抱歉，您访问的页面 <code className="bg-gray-200 px-2 py-1 rounded">{currentPath}</code> 不存在
        </p>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => navigateTo(action.path)}
              className="bg-white rounded-xl shadow-sm p-6 text-left hover:shadow-md transition-shadow group"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">
                {action.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {action.title}
              </h3>
              <p className="text-sm text-gray-600">
                {action.description}
              </p>
            </button>
          ))}
        </div>

        {/* Search Suggestion */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h3 className="font-semibold text-gray-800 mb-3">找不到您需要的内容？</h3>
          <div className="flex max-w-md mx-auto">
            <input
              type="text"
              placeholder="搜索页面..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors">
              搜索
            </button>
          </div>
        </div>

        {/* Support Link */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            需要帮助？{' '}
            <Link
              to="/contact"
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              联系支持团队
            </Link>
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            <span className="mr-2">🏠</span>
            返回首页
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-2">
          {['🔍', '📄', '🚀', '💡', '🔧'].map((icon, index) => (
            <div
              key={index}
              className="text-2xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;