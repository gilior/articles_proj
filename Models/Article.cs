namespace AIG.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Reflection.Metadata;
    using Microsoft.Extensions.Hosting;

    [Table("Article")]
    public class Article
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Id")]
        public int id { get; set; }
        [Column("Title")]
        [Required]
        public string title { get; set; }
        [Column("Description")]
        [Required]
        public string description { get; set; }

        [Column("Image")]
        [Required]
        public string image { get; set; }

        //public Category Category { get; set; }
        [Column("CategoryId")]
        public int categoryId { get; set; }
        [Column("Category")]
        public Category category { get; set; }
        [Column("IsFavorite")]
        public bool isFavorite { get; set; }

    }
}