import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Setting up Modern Education Platform...\n');

// Create necessary directories
const directories = [
  'public/images/courses',
  'public/images/instructors',
  'public/images/testimonials',
  'public/images/team'
];

directories.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Create placeholder images info
const placeholderInfo = {
  courses: [
    'web-development.jpg',
    'data-science.jpg',
    'mobile-development.jpg',
    'cloud-devops.jpg',
    'ui-ux-design.jpg',
    'cybersecurity.jpg'
  ],
  instructors: [
    'sarah-johnson.jpg',
    'michael-chen.jpg',
    'alex-rodriguez.jpg',
    'emma-wilson.jpg',
    'lisa-park.jpg',
    'david-kim.jpg'
  ],
  testimonials: [
    'jessica-martinez.jpg',
    'ahmed-hassan.jpg',
    'sarah-chen.jpg',
    'michael-thompson.jpg',
    'priya-patel.jpg',
    'david-kim.jpg',
    'emily-rodriguez.jpg',
    'james-wilson.jpg'
  ],
  team: [
    'sarah-johnson.jpg',
    'michael-chen.jpg',
    'lisa-park.jpg',
    'david-kim.jpg'
  ]
};

// Create placeholder image files (empty files for now)
Object.entries(placeholderInfo).forEach(([category, files]) => {
  files.forEach(file => {
    const filePath = path.join(__dirname, '..', 'public/images', category, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '');
      console.log(`📁 Created placeholder: ${filePath}`);
    }
  });
});

console.log('\n🎉 Setup complete!');
console.log('\nNext steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run dev');
console.log('3. Open: http://localhost:3000');
console.log('\n📝 Note: Replace placeholder images with actual images for production.');
