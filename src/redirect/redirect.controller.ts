import {Controller, Get, Redirect} from '@nestjs/common';

@Controller('redirect')
export class RedirectController {
    @Get()
    @Redirect('https://www.google.com/',302)
    redirectGoogle(){
        return 'https://www.google.com/'
    }
}
