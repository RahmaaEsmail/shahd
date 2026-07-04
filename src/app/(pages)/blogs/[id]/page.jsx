import BlogDetailsPage from "./blogsDetails"; // Adjust path to wherever you move it

// 1. Fetches real blog IDs at build time
export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://drshahdawad.com/ShahdAwad/user/home/blogs/get_blogs.php",
      { cache: "no-store" },
    );
    const json = await res.json();
    const blogs = json?.data || json?.blogs || [];
    if (blogs.length > 0) {
      return blogs.map((blog) => ({ id: blog.id.toString() }));
    }
  } catch (e) {
    // Fallback handled below
  }
  return Array.from({ length: 20 }, (_, i) => ({ id: (i + 1).toString() }));
}

// 2. Generates dynamic SEO metadata on the server
export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const res = await fetch(
      `https://drshahdawad.com/ShahdAwad/user/home/blogs/get_blog_details.php?id=${id}&blog_id=${id}`,
      { cache: "no-store" },
    );
    const json = await res.json();
    const blog = json?.data;
    if (blog) {
      return {
        title: `${blog.title_en || blog.title} | Dr. Shahd Awad`,
        description: blog.description_en || blog.description || "",
      };
    }
  } catch (e) {}
  return { title: "Blog | Dr. Shahd Awad" };
}

// 3. Main server entry page component
export default async function page({ params }) {
  const { id } = await params;
  return <BlogDetailsPage id={id} />;
}
