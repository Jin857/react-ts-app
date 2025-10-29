// pages/UserProfile.tsx
import React from 'react';
import { useTypedNavigation } from '../hooks/useTypedNavigation';
import { useTypedParams } from '../hooks/useTypedParams';

interface UserData {
    id: string;
    name: string;
    email: string;
}

const UserProfile: React.FC = () => {
    const { id } = useTypedParams<'/user/:id'>();
    const { navigateTo, setQueryParam } = useTypedNavigation();
    const [user, setUser] = React.useState<UserData | null>(null);

    React.useEffect(() => {
        // 模拟 API 调用
        const fetchUser = async () => {
            const userData: UserData = {
                id,
                name: `User ${id}`,
                email: `user${id}@example.com`,
            };
            setUser(userData);
        };

        fetchUser();
    }, [id]);

    const handleEditProfile = () => {
        navigateTo('/user/settings' as '/user/settings');
    };

    const handleSearchRelated = () => {
        setQueryParam('user', id);
        navigateTo('/products' as '/products');
    };

    if (!user) {
        return <div>加载中...</div>;
    }

    return (
        <div className="user-profile">
            <h1>用户资料</h1>
            <div className="user-info">
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>姓名:</strong> {user.name}</p>
                <p><strong>邮箱:</strong> {user.email}</p>
            </div>
            <div className="user-actions">
                <button onClick={handleEditProfile}>编辑资料</button>
                <button onClick={handleSearchRelated}>查看相关产品</button>
            </div>
        </div>
    );
};

export default UserProfile;