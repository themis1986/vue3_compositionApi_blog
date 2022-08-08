import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let response = await fetch("http://localhost:3000/posts");
      if (!response.ok) {
        throw Error("No data available");
      }
      posts.value = await response.json();
    } catch (e) {
      error.value = e.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;