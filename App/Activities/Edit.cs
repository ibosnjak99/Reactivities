using AutoMapper;
using Domain;
using MediatR;
using Persistance;
using System.Threading;
using System.Threading.Tasks;

namespace App.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                this.context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await context.Activities.FindAsync(request.Activity.Id);
                _mapper.Map(request.Activity, activity);
                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
