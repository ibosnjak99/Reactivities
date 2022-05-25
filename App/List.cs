using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistance;
using Microsoft.EntityFrameworkCore;

namespace App
{
    public class List
    {
        public class Query : IRequest<List<Activity>>
        {}
        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await this.context.Activities.ToListAsync();
            }
        }
        
    }
}