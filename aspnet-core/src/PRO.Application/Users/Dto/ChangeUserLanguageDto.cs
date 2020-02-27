using System.ComponentModel.DataAnnotations;

namespace PRO.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}