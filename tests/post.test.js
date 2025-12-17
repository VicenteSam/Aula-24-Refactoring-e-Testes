const {
  createPostSlug,
  isValidPost,
  filterPublishedPosts,
} = require("../src/post");

describe("createPostSlug", () => {
  test("gera slug corretamente a partir do título", () => {
    expect(createPostSlug("Meu Primeiro Post")).toBe("meu-primeiro-post");
  });

  test("retorna string vazia quando título é vazio", () => {
    expect(createPostSlug("")).toBe("");
  });

  test("remove espaços extras do título", () => {
    expect(createPostSlug("  Post   Teste  ")).toBe("post-teste");
  });
});

describe("isValidPost", () => {
  test("retorna true para post válido", () => {
    const post = { title: "Título", content: "Conteúdo" };
    expect(isValidPost(post)).toBe(true);
  });

  test("retorna false quando título está ausente", () => {
    const post = { content: "Conteúdo" };
    expect(isValidPost(post)).toBe(false);
  });

  test("retorna false quando conteúdo está vazio", () => {
    const post = { title: "Título", content: "" };
    expect(isValidPost(post)).toBe(false);
  });
});

describe("filterPublishedPosts", () => {
  test("retorna apenas posts com status published", () => {
    const posts = [
      { title: "A", status: "published" },
      { title: "B", status: "draft" },
    ];

    const result = filterPublishedPosts(posts);

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("A");
  });

  test("retorna array vazio quando não há posts publicados", () => {
    expect(filterPublishedPosts([])).toEqual([]);
  });
});
