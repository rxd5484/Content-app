import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
  try {
    console.log("--- Content Generation API Called ---");
    
    // Parse the request body
    const body = await request.json();
    const { contentType, topic, tone, keywords } = body;
    console.log("Request body:", { contentType, topic, tone, keywords });
    
    if (!topic) {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      );
    }
    
    try {
      // Generate content using OpenAI
      console.log("Generating content with OpenAI API...");
      const generatedContent = await generateWithOpenAI(contentType, topic, tone, keywords);
      console.log("OpenAI API call successful!");
      
      return NextResponse.json({ content: generatedContent });
    } catch (apiError) {
      console.error("OpenAI API error:", apiError);
      
      // Fallback to local generation if API fails
      console.log("Falling back to local generation");
      const fallbackContent = generateLocalFallback(contentType, topic, tone, keywords);
      
      return NextResponse.json({ 
        content: fallbackContent,
        note: "Generated using fallback method due to API limitation."
      });
    }
    
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content: ' + error.message },
      { status: 500 }
    );
  }
}

// Function to generate content with OpenAI API
async function generateWithOpenAI(contentType, topic, tone, keywords) {
  // Create the prompt based on content type and parameters
  const systemPrompt = createSystemPrompt(contentType);
  const userPrompt = createUserPrompt(contentType, topic, tone, keywords);
  
  console.log("System prompt:", systemPrompt);
  console.log("User prompt:", userPrompt);
  
  // Call OpenAI API
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt }
    ],
    temperature: 0.7,
    max_tokens: 1000
  });
  
  // Get the generated content
  const generatedContent = completion.choices[0].message.content;
  
  // Format the content if needed
  return formatContent(contentType, topic, generatedContent, keywords);
}

// Create the system prompt based on content type
function createSystemPrompt(contentType) {
  switch (contentType) {
    case 'blog':
      return "You are a professional blog writer who creates well-structured, engaging blog posts. Format your content using markdown with headings, subheadings, bullet points, and emphasis where appropriate.";
    
    case 'social':
      return "You are a social media content creator who writes engaging, concise posts optimized for social platforms. You know how to create content that drives engagement.";
    
    case 'email':
      return "You are an email marketing specialist who crafts compelling newsletters and email campaigns. You know how to structure emails with clear subjects, greetings, body content, and call-to-actions.";
    
    case 'ad':
      return "You are an advertising copywriter who creates persuasive, attention-grabbing copy. You know how to highlight benefits, create urgency, and include effective call-to-actions.";
    
    default:
      return "You are a professional content creator who specializes in creating high-quality, engaging content tailored to specific needs and audiences.";
  }
}

// Create the user prompt based on parameters
function createUserPrompt(contentType, topic, tone, keywords) {
  let prompt = '';
  
  switch (contentType) {
    case 'blog':
      prompt = `Write a detailed and informative blog post about "${topic}" with a ${tone} tone. Structure it with an introduction, main sections with subheadings, and a conclusion.`;
      break;
    
    case 'social':
      prompt = `Create an engaging social media post about "${topic}" with a ${tone} tone. Keep it concise but impactful.`;
      break;
    
    case 'email':
      prompt = `Write an email newsletter about "${topic}" with a ${tone} tone. Include a subject line, greeting, body content with key points, and a closing with call-to-action.`;
      break;
    
    case 'ad':
      prompt = `Create compelling advertisement copy for "${topic}" with a ${tone} tone. Focus on benefits, include persuasive elements, and add a clear call-to-action.`;
      break;
    
    default:
      prompt = `Create content about "${topic}" with a ${tone} tone.`;
  }
  
  // Add keywords instruction if provided
  if (keywords && keywords.trim() !== '') {
    prompt += ` Naturally incorporate these keywords where appropriate: ${keywords}.`;
  }
  
  return prompt;
}

// Format the content if needed
function formatContent(contentType, topic, content, keywords) {
  let formattedContent = content;
  
  // Add title/heading if not already present for certain content types
  switch (contentType) {
    case 'blog':
      if (!formattedContent.trim().startsWith('#')) {
        formattedContent = `# ${topic}\n\n${formattedContent}`;
      }
      break;
    
    case 'ad':
      if (!formattedContent.trim().startsWith('#')) {
        formattedContent = `# ${topic.toUpperCase()}\n\n${formattedContent}`;
      }
      break;
      
    // Other content types may not need formatting
  }
  
  return formattedContent;
}

// Local fallback generation function - implements the same functions you had before
function generateLocalFallback(contentType, topic, tone, keywords) {
  console.log("Generating fallback content for:", { contentType, topic, tone });
  
  // Get tone-specific language
  const toneAttributes = getToneAttributes(tone);
  
  let content = '';
  switch (contentType) {
    case 'blog':
      content = generateBlogPost(topic, toneAttributes, keywords);
      break;
    case 'social':
      content = generateSocialPost(topic, toneAttributes, keywords);
      break;
    case 'email':
      content = generateEmailNewsletter(topic, toneAttributes, keywords);
      break;
    case 'ad':
      content = generateAdvertisement(topic, toneAttributes, keywords);
      break;
    default:
      const randomAdj = toneAttributes.adjectives[Math.floor(Math.random() * toneAttributes.adjectives.length)];
      content = `# Content about ${topic}\n\nThis is a ${randomAdj} overview of ${topic}. It covers the essential aspects and provides valuable insights.\n\nKeywords: ${keywords || 'None'}`;
  }
  
  console.log("Generated fallback content successfully");
  return content;
}

// Tone attributes helper function
function getToneAttributes(tone) {
  const tones = {
    professional: {
      adjectives: ['valuable', 'strategic', 'effective', 'proven', 'reputable'],
      adverbs: ['effectively', 'reliably', 'consistently', 'precisely', 'professionally'],
      openings: ['In this professional analysis', 'This comprehensive overview', 'This detailed examination'],
      closings: ['In conclusion', 'To summarize the key points', 'Based on the analysis presented']
    },
    casual: {
      adjectives: ['awesome', 'cool', 'nice', 'great', 'handy'],
      adverbs: ['pretty much', 'basically', 'actually', 'honestly', 'simply'],
      openings: ['So, let\'s talk about', 'Hey, have you thought about', 'Let\'s dive into'],
      closings: ['So there you have it', 'That\'s the scoop on', 'And that\'s all about']
    },
    friendly: {
      adjectives: ['helpful', 'wonderful', 'delightful', 'valuable', 'fantastic'],
      adverbs: ['happily', 'gladly', 'warmly', 'helpfully', 'thoughtfully'],
      openings: ['I\'m excited to share with you', 'I\'d love to tell you about', 'Let\'s explore together'],
      closings: ['Thanks for joining me on this journey', 'I hope you found this helpful', 'Looking forward to sharing more']
    },
    enthusiastic: {
      adjectives: ['amazing', 'incredible', 'fantastic', 'extraordinary', 'phenomenal'],
      adverbs: ['tremendously', 'incredibly', 'amazingly', 'spectacularly', 'wonderfully'],
      openings: ['I\'m absolutely thrilled to share', 'Get ready for an amazing exploration of', 'You won\'t believe how exciting'],
      closings: ['Isn\'t that amazing?', 'How incredible is that?', 'I can\'t wait to see what\'s next!']
    },
    authoritative: {
      adjectives: ['definitive', 'expert', 'authoritative', 'conclusive', 'paramount'],
      adverbs: ['undoubtedly', 'certainly', 'definitively', 'unquestionably', 'absolutely'],
      openings: ['The evidence clearly demonstrates', 'Research conclusively shows', 'Experts universally agree'],
      closings: ['The evidence is clear', 'The conclusion is irrefutable', 'These findings are definitive']
    }
  };
  
  return tones[tone] || tones.professional;
}

