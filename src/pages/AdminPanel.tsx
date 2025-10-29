// pages/AdminPanel.tsx
import React, { useState } from 'react';
import { useTypedNavigation } from '../hooks/useTypedNavigation';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

interface Stats {
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  revenue: number;
}

const AdminPanel: React.FC = () => {
  const { navigateTo } = useTypedNavigation();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'users' | 'settings'>('dashboard');

  const stats: Stats = {
    totalUsers: 1244,
    activeUsers: 893,
    newUsers: 42,
    revenue: 125600
  };

  const users: User[] = [
    {
      id: '1',
      name: '张三',
      email: 'zhangsan@example.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-15'
    },
    {
      id: '2',
      name: '李四',
      email: 'lisi@example.com',
      role: 'admin',
      status: 'active',
      joinDate: '2024-01-10'
    },
    {
      id: '3',
      name: '王五',
      email: 'wangwu@example.com',
      role: 'user',
      status: 'inactive',
      joinDate: '2024-01-08'
    },
    {
      id: '4',
      name: '赵六',
      email: 'zhaoliu@example.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-05'
    }
  ];

  const StatCard: React.FC<{ title: string; value: string | number; change?: string; icon: string }> = ({
    title,
    value,
    change,
    icon
  }) => (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p className="text-sm text-green-500 mt-1">{change}</p>
          )}
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">管理员面板</h1>
              <p className="text-gray-600 mt-1">系统管理和数据分析</p>
            </div>
            <button
              onClick={() => navigateTo('/')}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              返回首页
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', label: '仪表板', icon: '📊' },
              { id: 'users', label: '用户管理', icon: '👥' },
              { id: 'settings', label: '系统设置', icon: '⚙️' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">数据概览</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="总用户数"
                value={stats.totalUsers.toLocaleString()}
                change="+12% 本月"
                icon="👥"
              />
              <StatCard
                title="活跃用户"
                value={stats.activeUsers.toLocaleString()}
                change="+8% 本月"
                icon="✅"
              />
              <StatCard
                title="新增用户"
                value={stats.newUsers}
                change="+5 今日"
                icon="🆕"
              />
              <StatCard
                title="总收入"
                value={`¥${stats.revenue.toLocaleString()}`}
                change="+15% 本月"
                icon="💰"
              />
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">最近活动</h3>
              <div className="space-y-4">
                {[
                  { action: '新用户注册', user: '钱七', time: '2分钟前' },
                  { action: '订单完成', user: '孙八', time: '5分钟前' },
                  { action: '密码重置', user: '周九', time: '10分钟前' },
                  { action: '资料更新', user: '吴十', time: '15分钟前' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div>
                      <span className="font-medium">{activity.user}</span>
                      <span className="text-gray-600 ml-2">{activity.action}</span>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">用户管理</h2>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                添加用户
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      用户
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      角色
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      状态
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      加入时间
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map(user => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${user.role === 'admin'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-gray-100 text-gray-800'
                          }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${user.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                          }`}>
                          {user.status === 'active' ? '活跃' : '非活跃'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.joinDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">编辑</button>
                        <button className="text-red-600 hover:text-red-900">删除</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">系统设置</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* General Settings */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">常规设置</h3>
                <div className="space-y-4">
                  {[
                    { label: '站点名称', value: 'React Router Demo' },
                    { label: '站点描述', value: '一个现代化的 React 应用' },
                    { label: '管理员邮箱', value: 'admin@example.com' }
                  ].map((setting, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {setting.label}
                      </label>
                      <input
                        type="text"
                        defaultValue={setting.value}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Settings */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">安全设置</h3>
                <div className="space-y-4">
                  {[
                    { label: '密码策略', value: '高强度' },
                    { label: '会话超时', value: '30分钟' },
                    { label: '双重认证', value: '启用' }
                  ].map((setting, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {setting.label}
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>{setting.value}</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end space-x-4">
              <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                取消
              </button>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                保存设置
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;