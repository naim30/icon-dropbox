import axios from "axios";

const state = {
  params: {
    query: "avatar",
    product_type: "item",
    asset: "icon",
    per_page: "20",
    page: 1,
    formats: [],
    sort: "popular",
    styles: [],
    price: "free",
  },
  data: [],
  nextURL: null,
  menu: "icon",
};

const getters = {
  data: (state) => state.data,
  nextURL: (state) => state.nextURL,
  params: (state) => state.params,
  menu: (state) => state.menu,
};

const actions = {
  fetchData: ({ commit }, params) => {
    axios
      .get("https://api.iconscout.com/v3/search", {
        params: params,
        headers: {
          "Client-ID": "157655688545277",
        },
      })
      .then((res) => {
        commit("FETCH_DATA", res.data.response.items);
      });
  },
  loadData: ({ commit }, url) => {
    axios
      .get("https://api.iconscout.com" + url, {
        headers: {
          "Client-ID": "157655688545277",
        },
      })
      .then((res) => {
        commit("LOAD_DATA", res.data.response.items);
      });
  },
  onMenuChage: ({ commit }, menu) => {
    commit("SET_MENU", menu);
    axios
      .get("https://api.iconscout.com/v3/search", {
        params: state.params,
        headers: {
          "Client-ID": "157655688545277",
        },
      })
      .then((res) => {
        commit("FETCH_DATA", res.data.response.items);
      });
  },
  onParamChange: ({ commit }, params) => {
    commit("SET_PARAMS", params);
    console.log(params);
    axios
      .get("https://api.iconscout.com/v3/search", {
        params: params,
        headers: {
          "Client-ID": "157655688545277",
        },
      })
      .then((res) => {
        console.log(params);
        console.log(res.data.response.items);
        commit("FETCH_DATA", res.data.response.items);
      });
  },
  onDownload: (uuid) => {
    axios
      .post(
        "https://api.iconscout.com/v3/items/" + uuid + "/api-download",
        {
          format: "svg",
        },
        {
          headers: {
            "Client-ID": "157655688545277",
            "Client-Secret": "rOJbjZrzCFpc1hpDQh9aaeYmFPDAr2mK",
          },
        }
      )
      .then((res) => {
        return axios.get(res.data.response.download.download_url, {
          headers: {
            "Client-ID": "157655688545277",
            "Client-Secret": "rOJbjZrzCFpc1hpDQh9aaeYmFPDAr2mK",
          },
        });
      })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.svg");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log(res);
      });
  },
};

const mutations = {
  FETCH_DATA: (state, data) => {
    state.data = data.data;
    state.nextURL = data.next_page_url;
  },

  LOAD_DATA: (state, data) => {
    let arrData = state.data;
    arrData.push(...data.data);
    state.data = arrData;
    state.nextURL = data.next_page_url;
  },

  SET_MENU: (state, menu) => {
    state.menu = menu;
    state.params.asset = menu;
  },

  SET_PARAMS: (state, params) => {
    state.params = params;
  },
};

export default { state, getters, actions, mutations };
