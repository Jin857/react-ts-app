// pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedNavigation } from '../hooks/useTypedNavigation';
import '../styles/home.css'

const Home: React.FC = () => {
    const { navigateTo } = useTypedNavigation();

    const features = [
        {
            title: '用户管理',
            description: '查看和管理用户信息',
            path: '/user/1' as '/user/:id',
            color: 'bg-blue-500'
        },
        {
            title: '产品展示',
            description: '浏览我们的产品目录',
            path: '/product/1' as '/product/:id',
            color: 'bg-green-500'
        },
        {
            title: '关于我们',
            description: '了解我们的团队和使命',
            path: '/about' as '/about',
            color: 'bg-purple-500'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <section className="text-center py-20 px-4">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                    欢迎使用 React Router Demo
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    这是一个展示 React Router + TypeScript 完整路由管理的示例应用
                </p>
                <div className="space-x-4">
                    <button
                        onClick={() => navigateTo('/about')}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        了解更多
                    </button>
                    <button
                        onClick={() => navigateTo('/contact')}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        联系我们
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    功能特性
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                            onClick={() => navigateTo(feature.path)}
                        >
                            <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                                <span className="text-white text-lg font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {feature.description}
                            </p>
                            <button className="text-blue-500 font-semibold hover:text-blue-600 transition-colors">
                                立即体验 →
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        快速导航
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/user/1"
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                            用户资料
                        </Link>
                        <Link
                            to="/product/1"
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                            产品详情
                        </Link>
                        <Link
                            to="/admin"
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                            管理员面板
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;