Component({
  properties: {
  },
  
  data: {
    loadingState: false,
    maskState: false,
  },

  methods: {
    show({ mask = false} = {}){
      this.setData({
        loadingState: true,
        maskState: mask
      })
    },
    hide(){
      this.setData({
        loadingState: false
      })
    }
  },
})

