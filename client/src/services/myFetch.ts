const API_BASE_URL = 'http://localhost:3000/api/v1/'

// this function is a wrapper around fetch that checks for errors and parses the response as JSON
// the responses from the server are expected to be in the format of DataEnvelope<T> or DataListEnvelope<T>

export default function rest<T>(url: string): Promise<T> {
  return fetch(url).then((res) => {
    if (!res.ok) {
      return res.text().then((text) => {
        throw new Error(text)
      })
    }
    return res.json() as Promise<T>
  })
}

// the api function is a convenience function that prepends the API base URL to the endpoint

export function api<T>(endpoint: string) {
  return rest<T>(`${API_BASE_URL}${endpoint}`)
}
