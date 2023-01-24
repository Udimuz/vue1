// import { createApp } from 'vue'
import Vuex from 'vuex'
// Подключение модуля Person:
import Person from './modules/person'	// .js

// const app = createApp({})
// app.use(Vuex)

// export default
// const _default: { Store: }
export default new Vuex.Store({
	modules: {
		Person
	}
})