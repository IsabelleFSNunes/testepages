// Cada artigo é uma lista de "blocos" tipados — assim novos artigos podem ser
// adicionados sem precisar mexer nos componentes de renderização.
// Tipos suportados: heading, paragraph, code, callout, table, quote, list

export const articles = [
  {
    slug: 'validations-dotnet',
    tag: 'Web Development',
    title: 'Validations in .NET',
    subtitle: 'Minimal API & MVC Controller — quatro formas de validar dados, e quando usar cada uma.',
    date: '2026-05-12',
    readTime: '8 min de leitura',
    accent: 'blue',
    blocks: [
      {
        type: 'paragraph',
        text: 'Is your API accepting garbage data? You might not even know it. Aqui está como o .NET lida com validação — e quando usar cada abordagem.',
        lead: true,
      },
      { type: 'heading', text: 'Validation Modes' },
      {
        type: 'paragraph',
        text: 'Existem quatro modos principais para implementar validação de entrada em uma API .NET.',
      },
      {
        type: 'list',
        items: [
          { title: 'Manual', text: 'Declarações if/else tradicionais, lógica de validação personalizada.' },
          { title: 'Data Annotation', text: 'Atributos nas propriedades do modelo (ex: [Required], [Range]).' },
          { title: 'Filters', text: 'Action filters e resource filters para lógica de validação.' },
          { title: 'External Validators', text: 'Biblioteca FluentValidation, classes de validação separadas.' },
        ],
      },
      { type: 'heading', text: 'Diagrama de contexto' },
      {
        type: 'paragraph',
        text: 'Este diagrama descreve uma aplicação MVC em .NET 10: o PostsController recebe um CreatePostDto no corpo da requisição — e é exatamente nesse DTO que a validação deve ser aplicada antes de qualquer lógica de negócio.',
      },
      {
        type: 'code',
        title: 'ContextDiagram.txt',
        lang: 'text',
        code:
`«abstract» ControllerBase
        ▲
        │
  PostsController
  - PostRepository _repository
  + GetAll() : IActionResult
  + Create(dto CreatePostDto) : IActionResult
        │
        ├── receives (HTTP body) ──► CreatePostDto   ← validação aplicada aqui
        │                             + Title, Body, UserId, Views, Tags
        │
        └── uses ──► PostRepository ──stores──► Post`,
      },
      { type: 'heading', text: 'Controller (MVC) — contexto básico' },
      {
        type: 'paragraph',
        text: 'MVC Controllers são o padrão tradicional do ASP.NET, presente desde as primeiras versões. Estruturam a aplicação em camadas, separando responsabilidades de forma explícita: controllers cuidam de roteamento e lógica HTTP, funcionam naturalmente com validação via ModelState, e são preferidos para APIs maiores e domínios mais complexos.',
      },
      {
        type: 'code',
        title: 'HelloInControllerMVC.cs',
        lang: 'csharp',
        code:
`[ApiController]
[Route("[controller]")]
public class HelloController : ControllerBase
{
    [HttpGet]
    public string Get()
    {
        return "Hello, Everyone!";
    }
}`,
      },
      { type: 'heading', text: 'Applying Data Annotation' },
      {
        type: 'paragraph',
        text: 'Atributos de validação aplicados diretamente no DTO:',
      },
      {
        type: 'code',
        title: 'CreatePostDTO.cs',
        lang: 'csharp',
        code:
`public class CreatePostDto
{
    [Required(ErrorMessage = "The title is required.")]
    [MaxLength(199, ErrorMessage = "The title is too long. It must not exceed 199 characters.")]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please provide content for the body.")]
    public string Body { get; set; } = string.Empty;

    [Range(1, 100, ErrorMessage = "UserId must be between 1 and 100.")]
    public int UserId { get; set; }

    [Range(0, 10000, ErrorMessage = "Views must be between 0 and 10,000.")]
    public int Views { get; set; }

    public List<string> Tags { get; set; } = [];
}`,
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Resposta esperada: 400 Bad Request com um objeto "errors" contendo cada campo inválido e sua respectiva mensagem — pronto para o frontend consumir.',
      },
      { type: 'heading', text: 'Applying External Validators (FluentValidation)' },
      {
        type: 'paragraph',
        text: 'Você precisa criar uma nova classe baseada em AbstractValidator<T>, fornecida pelo pacote NuGet FluentValidation.',
      },
      {
        type: 'code',
        title: 'CreatePostValidator.cs',
        lang: 'csharp',
        code:
`public class CreatePostValidator : AbstractValidator<CreatePostDto>
{
    public CreatePostValidator()
    {
        int maxTitleLength = 199;

        RuleFor(x => x.Title)
            .NotEmpty().WithMessage("The title is required.")
            .MaximumLength(maxTitleLength)
            .WithMessage($"The title must not exceed {maxTitleLength} characters.");

        RuleFor(x => x.Body)
            .NotEmpty().WithMessage("Please provide content for the body.");

        RuleFor(x => x.UserId)
            .InclusiveBetween(1, 100)
            .WithMessage("UserId must be between 1 and 100.");

        RuleFor(x => x.Tags)
            .Must(t => t.Count <= 5)
            .WithMessage("Maximum of 5 tags allowed.");
    }
}`,
      },
      {
        type: 'paragraph',
        text: 'Para aplicar Dependency Injection corretamente, é preciso introduzir interfaces para as camadas de serviço e repositório — IPostRepository e IPostServices abstraem as implementações concretas, e o validador é injetado direto no controller.',
      },
      { type: 'heading', text: 'E o Minimal API?' },
      {
        type: 'paragraph',
        text: 'Minimal API surgiu no .NET 6 (2022) como um estilo alternativo ao padrão tradicional de controllers MVC. Elimina boilerplate ao rotear requisições diretamente — sem controllers ou classes de hierarquia extra, preferido para protótipos simples, APIs pequenas e microsserviços.',
      },
      {
        type: 'code',
        title: 'HelloInMinimalAPI.cs',
        lang: 'csharp',
        code:
`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/hello", () => "Hello, Everyone!");

app.Run();`,
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Em Minimal API, atributos de Data Annotation não são disparados automaticamente — é preciso implementar um IEndpointFilter customizado para interceptar a requisição antes de chegar ao handler (ou, a partir do .NET 10, usar AddValidation()).',
      },
      {
        type: 'code',
        title: 'Program.cs — .NET 10',
        lang: 'csharp',
        code:
`var builder = WebApplication.CreateBuilder(args);

// native opt-in
builder.Services.AddValidation();`,
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Limitação: AddValidation() só cobre regras simples de campo. Não suporta validação cruzada entre campos nem validação assíncrona (que depende de banco de dados ou serviço externo). Para esses casos, FluentValidation continua sendo a ferramenta certa.',
      },
      { type: 'heading', text: 'Compatibility Matrix' },
      {
        type: 'table',
        headers: ['Validation Mode', 'Minimal API', 'MVC Controller'],
        rows: [
          ['Manual (if/else)', '✅', '✅'],
          ['Data Annotations', '⚠️ depende da versão .NET', '✅'],
          ['Action Filters', '⚠️ se usar Data Annotations', '⚠️ se a lógica for além do simples'],
          ['External Validation (FluentValidation)', '✅', '✅'],
        ],
      },
      { type: 'heading', text: 'Qual usar?' },
      {
        type: 'table',
        headers: ['Cenário', 'Recomendado'],
        rows: [
          ['Protótipo rápido', 'Data Annotations'],
          ['MVC + regras simples', 'Data Annotations'],
          ['Minimal API + .NET 6–9', 'Filter + FluentValidation'],
          ['Minimal API + .NET 10', 'AddValidation() (simples) / FluentValidation (complexo)'],
          ['Regras cruzadas ou assíncronas', 'FluentValidation sempre'],
          ['Sem dependências externas', 'Manual (escopo pequeno apenas)'],
        ],
      },
      {
        type: 'quote',
        text: 'A validação certa não é a mais robusta — é a que combina com o tamanho e a complexidade real do seu domínio.',
      },
    ],
  },
]

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug)
}
