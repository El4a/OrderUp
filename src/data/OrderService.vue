<script>
  import axios from 'axios';

  const JSONBIN_HTTP = axios.create({
    baseURL: `https://api.jsonbin.io/b/${process.env.BIN_ID}/`,
    headers: {
      'secret-key': process.env.JSONBIN_API_TOKEN,
      'cache-control': 'no-cache'
    }
  });

  export default {
    read() {
      return JSONBIN_HTTP
        .get('latest')
        .then(response => response.data);
    },
    order(drinkId, name) {
      const newOrder = {drinkId, name, "afgeleverd": false};
      return this.read()
        .then(orders => Array.of(...orders, newOrder))
        .then(orders => JSONBIN_HTTP.put('', orders))
    }
  };
</script>
