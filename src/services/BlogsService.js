import { AppState } from '../AppState'
// import router from '../router'
import { api } from './AxiosService'

class BlogsService {
  async getAll() {
    const res = await api.get('api/blogs')
    AppState.blogs = res.data
  }

  async getActive(id) {
    const res = await api.get('api/blogs/' + id)
    AppState.activeBlog = res.data
  }

  //     async getMyProjects() {
  //       const res = await api.get(`api/blogs?creatorId=${AppState.account.id}`)
  //       AppState.myProjects = res.data
  //     }

  //     async getByProfileId(id) {
  //       const res = await api.get(`api/blogs?creatorId=${id}`)
  //       AppState.activeProjects = res.data
  //     }

  //     async create(data) {
  //       const res = await api.post('api/blogs', data)
  //       router.push({ name: 'ProjectDetails', params: { id: res.data.id } })
  //       // this.getAll()
  //     }

//   async addPhoto(projectId, photo) {
//     await api.post(`api/projects/${projectId}/photos`, photo)
//     this.getActive(projectId)
//   }
}

export const blogsService = new BlogsService()
