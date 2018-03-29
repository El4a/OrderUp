export default {
  left(route, router) {
    switch(route) {
      case 'drinks':
        router.push('/orders');
        break;
      case 'orders':
        router.push('/faq');
      default:
        return null;
    };

  },
  right(route, router) {
    switch(route) {
      case 'faq':
        router.push('/orders');
        break;
      case 'orders':
        router.push('/');
      default:
        return null;
    }
  }
}