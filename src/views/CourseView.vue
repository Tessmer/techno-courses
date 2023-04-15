<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="content">
        <div>
          <h1>{{ api.nome }}</h1>
          <p>{{ api.descricao }}</p>
          <h2 class="classes-title">Aulas</h2>
          <ul class="classes">
            <li v-for="aula in api.aulas" :key="aula.id">
              <router-link
                :to="{ name: 'lesson', params: { lesson: aula.id } }"
                >{{ aula.nome }}</router-link
              >
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import PageLoading from "@/components/PageLoading.vue";
import fetchData from "@/mixins/fetchData";

export default {
  props: ["course"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/curso/${this.course}`);
  },
  components: { PageLoading },
};
</script>

<style>
.classes-title {
  margin: 40px 0 20px 0;
}

.classes li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.classes li a.router-link-active {
  background: #4b8;
  color: white;
}
</style>
