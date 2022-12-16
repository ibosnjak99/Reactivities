using System;
using System.Collections.Generic;
using App.Profiles;

namespace App.Activities
{
    public class ActivityDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string date { get; set;}
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
        public string HostUsername { get; set; }
        public ICollection<Profile> Attendees { get; set; }
    }
}