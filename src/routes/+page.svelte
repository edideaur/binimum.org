<script>
  import { onMount } from 'svelte';
  import Carousel from './Carousel.svelte';
  
  let testimonials = [
    {
      quote: "Adopting the Binimum philosophy has transformed my life. I've never felt more free.",
      author: "Sarah J., Designer"
    },
    {
      quote: "Less truly is more. The Binimum approach helped me focus on what really matters.",
      author: "Michael T., Engineer"
    },
    {
      quote: "I was drowning in possessions and commitments. Binimum showed me the way out.",
      author: "Elena R., Teacher"
    }
  ];
  
  let currentTestimonial = $state(0);
  let blogPosts = $state([]);
  
  onMount(async () => {
    const interval = setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }, 5000);
    
    try {
      const response = await fetch('/api/posts.json');
      blogPosts = await response.json();
    } catch (error) {
      console.error('Error loading blog posts:', error);
      blogPosts = [];
    }
    
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>Binimum - The Philosophy of Bare Minimum</title>
</svelte:head>

<section class="hero">
  <Carousel />
</section>

<section class="section features-section">
  <div class="container">
    <h2 class="section-title">The Binimum Way</h2>
    <div class="features">
      <div class="feature">
        <div class="feature-icon">🌱</div>
        <h3>Simplify</h3>
        <p>Reduce possessions, commitments, and distractions to focus on what truly matters.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">🧘</div>
        <h3>Balance</h3>
        <p>Find harmony between necessity and desire, creating space for peace and contentment.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">🌍</div>
        <h3>Sustain</h3>
        <p>Live responsibly with minimal environmental impact for a better future.</p>
      </div>
    </div>
  </div>
</section>

<section class="section testimonial-section">
  <div class="container">
    <h2 class="section-title">Lives Transformed</h2>
    <div class="testimonial">
      <div class="quote-mark">"</div>
      <p class="quote">{testimonials[currentTestimonial].quote}</p>
      <p class="author">— {testimonials[currentTestimonial].author}</p>
    </div>
    <div class="testimonial-dots">
      {#each testimonials as _, i}
        <span class="dot" class:active={i === currentTestimonial}></span>
      {/each}
      
    </div>
  </div>
</section>

<section class="section cta-section">
  <div class="container">
    <div class="cta-content">
      <h2>Begin Your Binimum Journey Today</h2>
      <p>Subscribe to our newsletter for weekly inspiration and practical tips on living the Binimum way.</p>
      <form class="newsletter-form">
        <input type="email" placeholder="Your email address" required />
        <button type="submit" class="btn">Subscribe</button>
      </form>
    </div>
  </div>
</section>

<style>
  .hero {
    background-color: var(--primary-color);
    color: white;
    text-align: center;
  }
  
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .feature {
    text-align: center;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .feature:hover {
    transform: translateY(-5px);
  }
  
  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .testimonial-section {
    background-color: var(--secondary-color);
    color: white;
  }
  
  .testimonial {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    padding: 2rem;
  }
  
  .quote-mark {
    font-size: 6rem;
    position: absolute;
    top: -2rem;
    left: 0;
    opacity: 0.2;
    font-family: Georgia, serif;
  }
  
  .quote {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 1.5rem;
  }
  
  .author {
    font-weight: 600;
  }
  
  .testimonial-dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transition: background-color 0.3s ease;
  }
  
  .dot.active {
    background-color: white;
  }
  
  .cta-section {
    background-color: #f5f5f5;
  }
  
  .cta-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }
  
  .newsletter-form {
    display: flex;
    gap: 0.5rem;
    margin-top: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .newsletter-form input {
    flex: 1;
    padding: 0.8rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    .newsletter-form {
      flex-direction: column;
    }
    
    .quote {
      font-size: 1.2rem;
    }
  }
</style>
