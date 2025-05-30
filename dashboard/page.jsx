
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Dashboard() {
  // Mock data - in a real app, this would come from an API
  const recentContent = [
    { id: 1, title: 'Blog Post: 10 Ways to Improve SEO', date: 'May 10, 2025', type: 'Blog Post' },
    { id: 2, title: 'Instagram Caption: Product Launch', date: 'May 8, 2025', type: 'Social Media' },
    { id: 3, title: 'Email Newsletter: Monthly Update', date: 'May 5, 2025', type: 'Email' },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <Link
              href="/create"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Create New Content
            </Link>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {/* Content Created Stat */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Content Created
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  3
                </dd>
              </div>
            </div>
            
            {/* Remaining Generations Stat */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Remaining Generations Today
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  2/5
                </dd>
              </div>
            </div>
            
            {/* Account Type Stat */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Account Type
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  Free
                </dd>
                <div className="mt-3">
                  <Link
                    href="/account/upgrade"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Upgrade to Pro →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Content */}
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Content</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {recentContent.map((content) => (
                <li key={content.id}>
                  <Link href={`/content/${content.id}`} className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {content.title}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {content.type}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            {content.date}
                          </p>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <button className="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}