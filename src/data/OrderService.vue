<script>
  import axios from 'axios';

  const JSONBIN_HTTP = axios.create({
    baseURL: `https://api.jsonbin.io/b/${process.env.BIN_ID}/`,
    headers: {'secret-key': process.env.JSONBIN_API_TOKEN}
  });

  export default {
    read() {
      return JSONBIN_HTTP
        .get('latest')
        .then(response => response.data);
    }
  };
</script>
