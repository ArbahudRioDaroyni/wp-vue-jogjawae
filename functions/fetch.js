// fetch.js
const { ref, onMounted, getCurrentInstance } = Vue

export function fetchData(type = "posts", params = null) {
  const { $rootlocal } = getCurrentInstance().appContext.config.globalProperties;
  const loading = ref(false)
  const error = ref(null)
  const posts = ref([])

  const fetchDataInternal = async () => {
    loading.value = true
    error.value = posts.value = null
    try {
      let url = `${$rootlocal}/wp-json/wp/v2/${type}` // how to get variable global in vue compositsion api?
      if (params) {
        url += `?${params}`
      }
      const response = await fetch(url);
      posts.value = await response.json();

      if (posts.value[0].modified_gmt) {
        const dateModified = new Date(posts.value[0].modified_gmt)
        posts.value[0].formattedModified = dateModified.toLocaleString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'}) // weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      error.value = 'Error fetching data.'
    } finally {
      loading.value = false
    }
  };

  onMounted(fetchDataInternal);

  return {
    loading,
    error,
    posts
  }
}