// pages/Contact.tsx
import React, { useState } from 'react';
import { useTypedNavigation } from '../hooks/useTypedNavigation';
import '../styles/contact.css'

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { navigateTo } = useTypedNavigation();
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('表单提交:', form);
    alert('消息发送成功！我们会尽快回复您。');
    setForm({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: '📧',
      title: '邮箱',
      value: 'contact@example.com',
      description: '发送邮件给我们'
    },
    {
      icon: '📞',
      title: '电话',
      value: '+86 138 0000 0000',
      description: '工作日 9:00-18:00'
    },
    {
      icon: '📍',
      title: '地址',
      value: '北京市朝阳区某某街道123号',
      description: '欢迎来访'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">联系我们</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            有任何问题或建议？我们很乐意听取您的意见
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">联系信息</h2>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{method.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{method.title}</h3>
                    <p className="text-gray-700">{method.value}</p>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 rounded-lg h-48 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-2xl mb-2">🗺️</div>
                <p>地图位置</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">发送消息</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的邮箱"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  主题 *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">请选择主题</option>
                  <option value="technical">技术支持</option>
                  <option value="business">商务合作</option>
                  <option value="feedback">产品反馈</option>
                  <option value="other">其他</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  消息内容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="请详细描述您的问题或建议..."
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => navigateTo('/about')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  关于我们
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition-colors font-semibold"
                >
                  {isSubmitting ? '发送中...' : '发送消息'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;