import React from 'react';
import { useTypedNavigation } from '../hooks/useTypedNavigation';
import '../styles/about.css'

const About: React.FC = () => {
  const { navigateTo } = useTypedNavigation();

  const teamMembers = [
    {
      name: '张三',
      role: '前端开发工程师',
      bio: '专注于 React 和 TypeScript 开发',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: '李四',
      role: 'UI/UX 设计师',
      bio: '致力于创造优秀的用户体验',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: '王五',
      role: '全栈开发工程师',
      bio: '精通前后端技术栈',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const technologies = [
    'React 18',
    'TypeScript',
    'React Router v6',
    'Tailwind CSS',
    'Vite'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们是一支专注于现代 Web 技术的前端团队，致力于打造优秀的用户体验
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">我们的使命</h2>
            <p className="text-lg text-gray-700 mb-6">
              通过创新的技术解决方案，为用户提供卓越的数字体验。我们相信技术应该服务于人，让复杂的事情变得简单。
            </p>
            <p className="text-lg text-gray-700 mb-8">
              在这个示例项目中，我们展示了如何使用 React Router 和 TypeScript 构建类型安全、可维护的路由系统。
            </p>
            <button
              onClick={() => navigateTo('/contact')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              加入我们
            </button>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">技术栈</h3>
            <div className="space-y-3">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">团队成员</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-500 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-400">完成项目</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-gray-400">年经验</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-400">客户满意度</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-gray-400">技术支持</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;