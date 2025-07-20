namespace CSApi.Models
{
    public class Creator
    {
        public int CreatorID { get; set; }
        public string FullName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Bio { get; set; }
        public string Platform { get; set; }
        public int FollowerCount { get; set; }
        public string Niche { get; set; }
        public string ProfilePicURL { get; set; }
        public DateTime CreatedAt { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
    public class CreatorDto
    {
        public string? FullName { get; set; }
        public string? Email { get; set; }
        public string? Bio { get; set; }
        public string? Niche { get; set; }
        public string? Platform { get; set; }
        public string? Password { get; set; } // Hash it in the service layer
        public string? ProfilePicURL { get; set; }
        public string ? Username { get; internal set; }
    }

}
