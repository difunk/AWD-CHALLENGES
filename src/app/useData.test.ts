import { useData } from './useData';
import * as fetchModule from '../api/fetchData';

jest.mock('../api/fetchData'); // replaces the whole module

test('returns data from mocked fetchData', async () => {
  (fetchModule.fetchData as jest.Mock).mockResolvedValue({
    items: ['a', 'b'],
  });

  const result = await useData();
  expect(result).toEqual(['a', 'b']);
});

afterEach(() => {
  jest.clearAllMocks(); 
  jest.resetAllMocks();
  jest.restoreAllMocks();
});