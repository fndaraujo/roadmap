import reactjsData from 'data/reactjs'
import dotnetData from 'data/dotnet'

export default function handler(request, response) {
  switch (request.method) {
    case 'GET':
      const { guide } = request.query
      switch (guide) {
        case 'reactjs':
          response.status(200).json(reactjsData)
          break
        case 'dotnet':
          response.status(200).json(dotnetData)
          break
        default:
          response.status(404).json({ error: 'endpoint not found' })
          break
      }
      break
    default:
      response.status(405).json({ error: 'method not allowed' })
      break
  }
}