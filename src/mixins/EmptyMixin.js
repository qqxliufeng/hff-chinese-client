export default {
  data() {
    return {
      showEmptyTip: true
    }
  },
  methods: {
    setEmptyState(state = false) {
      this.showEmptyTip = state
    }
  }
}