'use client';
import { useState } from 'react';
import Layout from '../../components/Layout';

export default function CreateContent() {
  // State for form fields
  const [contentType, setContentType] = useState('blog');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('friendly');
  const [keywords, setKeywords] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const contentTypes = [
    { id: 'blog', name: 'Blog Post' },
    { id: 'social', name: 'Social Media Post' },
    { id: 'email', name: 'Email Newsletter' },
    { id: 'ad', name: 'Advertisement Copy' },
  ];

  const toneOptions = [
    { id: 'professional', name: 'Professional' },
    { id: 'casual', name: 'Casual' },
    { id: 'friendly', name: 'Friendly' },
    { id: 'enthusiastic', name: 'Enthusiastic' },
    { id: 'authoritative', name: 'Authoritative' },
  ];

  const handleGenerate = async () => {
  setIsGenerating(true);
  setError('');
  
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contentType,
        topic,
        tone,
        keywords,
      }),
    });
    
    // Log raw response
    const responseText = await response.text();
    console.log('Raw response:', responseText);
    
    // Try to parse as JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse response as JSON:', e);
      throw new Error('Server returned invalid response');
    }
    
    if (!response.ok) {
      throw new Error(data.error || `Server error: ${response.status}`);
    }
    
    setGeneratedContent(data.content);
  } catch (err) {
    console.error('Error details:', err);
    setError(err.message || 'Something went wrong. Please try again.');
  } finally {
    setIsGenerating(false);
  }
};

  
  return (
    <Layout>
      <div className="bg-gray-900 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-white mb-6">Create Content</h1>
          
          {error && (
            <div className="mb-6 bg-red-900 text-white p-4 rounded-md">
              {error}
            </div>
          )}
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Content Generation Form */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                <div className="space-y-6">
                  {/* Content Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-200">Content Type</label>
                    <select
                      value={contentType}
                      onChange={(e) => setContentType(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      {contentTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Topic */}
                  <div>
                    <label className="block text-sm font-medium text-gray-200">Topic</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-600 rounded-md"
                        placeholder="e.g. Artificial Intelligence in Marketing"
                      />
                    </div>
                  </div>
                  
                  {/* Tone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-200">Tone</label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      {toneOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Keywords */}
                  <div>
                    <label className="block text-sm font-medium text-gray-200">
                      Keywords (comma separated)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        className="bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-600 rounded-md"
                        placeholder="e.g. AI, marketing, automation"
                      />
                    </div>
                  </div>
                  
                  {/* Generate Button */}
                  <div>
                    <button
                      type="button"
                      onClick={handleGenerate}
                      disabled={isGenerating || !topic}
                      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                        isGenerating || !topic
                          ? 'bg-indigo-400 cursor-not-allowed'
                          : 'bg-indigo-600 hover:bg-indigo-700'
                      }`}
                    >
                      {isGenerating ? 'Generating...' : 'Generate Content'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Preview */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 h-full">
                <h2 className="text-lg font-medium text-white mb-4">Generated Content</h2>
                {isGenerating ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
                  </div>
                ) : generatedContent ? (
                  <div className="prose prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap p-4 bg-gray-700 text-gray-100 rounded-lg">
                      {generatedContent}
                    </pre>
                    <div className="mt-4 flex justify-end space-x-4">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-200 bg-gray-700 hover:bg-gray-600"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64 text-gray-400">
                    Your generated content will appear here
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}