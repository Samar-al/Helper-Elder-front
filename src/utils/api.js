export const baseUrl = 'https://localhost:8000/api';

export function getHttpAuthHeaders(jwt) {
  return {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
}
