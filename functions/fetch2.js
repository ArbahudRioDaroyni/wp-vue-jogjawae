const { ref, getCurrentInstance } = Vue

export async function fetchData(type = "posts", params = null) {
  const { $rootlocal } = getCurrentInstance().appContext.config.globalProperties;
  const loading = ref(false)
  const error = ref(null)
  const posts = ref([])

  loading.value = true
  error.value = null

  try {
    let url = `${$rootlocal}/wp-json/wp/v2/${type}`
    if (params) {
      url += `?${params}`
    }
    const response = await fetch(url)
    const data = await response.json()

    // Assign data to posts
    posts.value = data

    if (posts.value[0].modified_gmt) {
      const dateModified = new Date(posts.value[0].modified_gmt)
      posts.value[0].formattedModified = dateModified.toLocaleString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'}) // weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
    }

    // Return loading, error, and posts
    return { loading, error, posts }
  } catch (err) {
    console.error('Error fetching data:', err)
    error.value = 'Error fetching data.'

    // Return loading, error, and posts
    return { loading, error, posts }
  } finally {
    loading.value = false
  }
}