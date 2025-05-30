'use client';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const [showLearnMore, setShowLearnMore] = useState(false);

  // Learn More Modal Component
  const LearnMoreModal = () => (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-medium text-gray-900">About AI Content Assistant</h3>
          <button 
            onClick={() => setShowLearnMore(false)}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-4 text-gray-600 space-y-6">
          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">What is AI Content Assistant?</h4>
            <p>AI Content Assistant is a powerful platform that leverages artificial intelligence to help you create high-quality content quickly and efficiently. Whether you need blog posts, social media updates, marketing copy, or email newsletters, our AI-powered tools can help you generate engaging content in minutes.</p>
          </section>
          
          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h5 className="font-medium text-indigo-800 mb-2">Content Generation</h5>
                <p className="text-sm">Create various types of content with simple inputs. Just specify your topic, tone, and preferences.</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h5 className="font-medium text-indigo-800 mb-2">Multiple Content Types</h5>
                <p className="text-sm">Generate blog posts, social media content, email newsletters, and marketing copy.</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h5 className="font-medium text-indigo-800 mb-2">Tone Customization</h5>
                <p className="text-sm">Adjust the tone of your content to match your brand's voice: professional, casual, friendly, enthusiastic, or authoritative.</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h5 className="font-medium text-indigo-800 mb-2">SEO Optimization</h5>
                <p className="text-sm">Pro subscribers receive SEO recommendations to improve content visibility and ranking.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li><span className="font-medium">Choose content type</span> - Select what kind of content you need to create.</li>
              <li><span className="font-medium">Define your topic</span> - Enter the subject matter for your content.</li>
              <li><span className="font-medium">Select tone</span> - Choose how you want your content to sound.</li>
              <li><span className="font-medium">Add keywords</span> - Include relevant keywords for better SEO (optional).</li>
              <li><span className="font-medium">Generate content</span> - Let our AI create high-quality content based on your inputs.</li>
              <li><span className="font-medium">Edit and save</span> - Make any necessary adjustments and save your content.</li>
            </ol>
          </section>
          
          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Subscription Plans</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="text-gray-900 font-medium mb-2">Free Plan</h5>
                <p className="text-2xl font-bold mb-2">$0<span className="text-sm font-normal text-gray-500">/month</span></p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>5 generations per day</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Basic content types</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Standard support</span>
                  </li>
                </ul>
              </div>
              <div className="border-2 border-indigo-500 rounded-lg p-4 relative">
                <div className="absolute top-0 right-4 -mt-3 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full uppercase font-bold">Popular</div>
                <h5 className="text-gray-900 font-medium mb-2">Pro Plan</h5>
                <p className="text-2xl font-bold mb-2">$20<span className="text-sm font-normal text-gray-500">/month</span></p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited generations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All content types</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Plagiarism checking</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Frequently Asked Questions</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-900">How does the AI generate content?</h5>
                <p className="text-sm mt-1">Our AI technology uses advanced natural language processing to understand your topic and create original, high-quality content based on your specifications.</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-900">Is the generated content original?</h5>
                <p className="text-sm mt-1">Yes, all content is generated uniquely for your specific inputs. Pro users also have access to plagiarism checking tools for added peace of mind.</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-900">Can I edit the generated content?</h5>
                <p className="text-sm mt-1">Absolutely! You can modify, refine, and customize the AI-generated content to perfectly match your needs.</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-900">How do I upgrade to the Pro plan?</h5>
                <p className="text-sm mt-1">You can upgrade anytime from your account settings. Just navigate to the Subscription tab and select the Pro plan.</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-900">Can I cancel my Pro subscription?</h5>
                <p className="text-sm mt-1">Yes, you can cancel your subscription at any time. You'll continue to have Pro access until the end of your current billing period.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
          <Link 
            href="/signup"
            className="px-4 py-2 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50"
          >
            Sign Up Free
          </Link>
          <button
            onClick={() => setShowLearnMore(false)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      {showLearnMore && <LearnMoreModal />}
      
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Create amazing content</span>{' '}
                  <span className="block text-indigo-600 xl:inline">powered by AI</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Generate blog posts, social media content, marketing copy, and more with our powerful AI assistant. Save time and boost your creativity.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/create"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      onClick={() => setShowLearnMore(true)}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-indigo-100">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center text-indigo-500">
            {/* Placeholder for an illustration */}
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-32 h-32"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.25 48.25 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to create great content
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our AI-powered platform helps you create engaging content in minutes, not hours.
            </p>
          </div>
        </div>
      </div>
      
      {/* Pricing Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Plans for everyone
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Choose the plan that's right for you.
            </p>
          </div>
          
          <div className="mt-10 flex justify-center space-x-6">
            {/* Free Tier */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-center text-2xl font-medium text-gray-900">Free</h3>
                <div className="mt-4 flex justify-center">
                  <span className="px-2 text-center font-extrabold text-5xl text-gray-900">$0</span>
                </div>
                <p className="mt-4 text-center text-sm text-gray-600">Get started with basic features</p>
              </div>
              <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                <Link href="/signup" className="block w-full text-center rounded-md border border-transparent bg-indigo-600 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700">
                  Sign up free
                </Link>
              </div>
            </div>
            
            {/* Pro Tier */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-indigo-500">
              <div className="px-6 py-8">
                <h3 className="text-center text-2xl font-medium text-gray-900">Pro</h3>
                <div className="mt-4 flex justify-center">
                  <span className="px-2 text-center font-extrabold text-5xl text-gray-900">$20</span>
                  <span className="text-xl text-gray-600 self-end">/mo</span>
                </div>
                <p className="mt-4 text-center text-sm text-gray-600">Everything you need for professional content</p>
              </div>
              <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                <Link href="/signup?plan=pro" className="block w-full text-center rounded-md border border-transparent bg-indigo-600 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700">
                  Get Pro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}