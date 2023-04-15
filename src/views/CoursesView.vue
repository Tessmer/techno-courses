<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="content">
        <div>
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
        </div>
        <ul class="courses-list">
          <li v-for="curso in api.cursos" :key="curso.id">
            <h2>
              <router-link
                :to="{ name: 'course', params: { course: curso.id } }"
              >
                {{ curso.nome }} - {{ curso.totalAulas }} aulas |
                {{ curso.horas }} horas
              </router-link>
            </h2>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  },
};
</script>

<style>
.courses-list li {
  margin-bottom: 40px;
}
</style>
