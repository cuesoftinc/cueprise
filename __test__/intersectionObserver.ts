const intersectionObserverMock = () => ({
  observe: () => null
})

export default window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);