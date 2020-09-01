import axios from "axios";

class ApiService {

	/**
	 * Get request
	 * @param {String} url The url using call api
	 * @param {Boolean} notice Show modal message
	 * @param {*} config The configs instance headers, etc
	 */
	get(url, notice, { ...config } = {} = {}) {
		return new Promise((resolve, reject) => {
			return axiosClient({
				url: url,
				...config
			})
				.then(response => {
					if (notice.success) this.process({ type: "success", text: "The proccess successfully" });

					resolve(response.data);
				})
				.catch(({ response }) => {
					if (notice.error) this.process({ type: "error", text: "Oop! You have few issues here" });

					reject(response);
				});
		});
	}

	/**
	 * Post request
	 * @param {String} url The url using call api
	 * @param {Object} data The data submit
	 * @param {Boolean} notice Show modal message
	 * @param {*} config The configs instance headers, etc
	 */
	post(url, data, notice, { ...config } = {}) {
		return new Promise((resolve, reject) => {
			return axios({
				url: url,
				data: { ...data },
				...config
			})
				.then(response => {
					if (notice) this.process({ type: "success", text: "The proccess successfully" });

					resolve(response.data);
				})
				.catch(({ response }) => {
					if (notice) this.process({ type: "error", text: "Oop! You have few issues here " });
					reject(response);
				});
		});
	}

	/**
	 * 
	 * @param {String} url The url call api
	 * @param {Object} data The data submit 
	 * @param {Boolean} notice Show modal message 
	 * @param {*} config th configs instance headers, etc
	 */
	put(url, data, notice, { ...config } = {}) {
		return new Promise((resolve, reject) => {
			return axios({
				url,
				data: { ...data },
				...config
			})
				.then(response => {
					if (notice) this.process({ type: "success", text: "The proccess successfully" });

					resolve(response.data);
				})
				.catch(({ response }) => {
					if (notice) this.process({ type: "error", text: "Oop! You have few issues here " });
					reject(response);
				});
		});
	}

	/**
	 * 
	 * @param {String} url The url call api
	 * @param {Object} data The data submit 
	 * @param {Boolean} notice Show modal message 
	 * @param {*} config th configs instance headers, etc
	 */
	patch(url, data, notice, { ...config } = {}) {
		return new Promise((resolve, reject) => {
			return axios({
				url,
				data: { ...data },
				...config
			})
				.then(response => {
					if (notice) this.process({ type: "success", text: "The proccess successfully" });

					resolve(response.data);
				})
				.catch(({ response }) => {
					if (notice) this.process({ type: "error", text: "Oop! You have few issues here " });
					reject(response);
				});
		});
	}

	/**
	 * 
	 * @param {String} url The url call api
	 * @param {Object} data The data submit 
	 * @param {Boolean} notice Show modal message 
	 * @param {*} config th configs instance headers, etc
	 */
	delete(url, data, notice, { ...config } = {}) {
		return new Promise((resolve, reject) => {
			return axios({
				url,
				data: { ...data },
				...config
			})
				.then(response => {
					if (notice) this.process({ type: "success", text: "The proccess successfully" });

					resolve(response.data);
				})
				.catch(({ response }) => {
					if (notice) this.process({ type: "error", text: "Oop! You have few issues here " });
					reject(response);
				});
		});
	}

	/**
	 * Process message notice
	 * @param {String} type The type of message (success | warn | error | info)
	 * @param {String} text The text need notice
	 */
	process({ type, text }) {
		switch (type) {
			case "success":
				alert(text || "Yehh, Successfully");
				break;
			case "error":
				alert(text || "~Oop! Something went is wrong !");
				break;
			case "info":
				alert(text || "You have a new notification");
				break;
			case "warn":
				alert(text || "Warn! Issue warnings");
				break;
			default:
				alert(text);
		}
	}
}

export default new ApiService();
