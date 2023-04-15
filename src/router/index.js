import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import CoursesView from "@/views/CoursesView.vue";
import CourseView from "@/views/CourseView";
import LessonView from "@/views/LessonView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/courses",
    name: "courses",
    component: CoursesView,
  },
  {
    path: "/courses/:course",
    name: "course",
    component: CourseView,
    props: true,
    children: [
      {
        path: ":lesson",
        name: "lesson",
        component: LessonView,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
